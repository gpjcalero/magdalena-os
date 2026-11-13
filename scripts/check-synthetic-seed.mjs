import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, extname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const seedPath = resolve(root, "src/lib/seed-data.ts");

function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx", ".js", ".jsx", ".json"].includes(extname(path)) ? [path] : [];
  });
}

function literalValues(source, field) {
  const values = [];
  for (const quote of ["'", '"', "`"]) {
    const escaped = quote === "`" ? "\\`" : quote;
    const pattern = new RegExp(`\\b${field}\\s*:\\s*${escaped}([^${escaped}\\r\\n]*)${escaped}`, "g");
    values.push(...[...source.matchAll(pattern)].map((match) => match[1]));
  }
  return values;
}

export function runPrivacyGate() {
  const source = readFileSync(seedPath, "utf8");
  const projectSources = sourceFiles(resolve(root, "src"))
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");

  const violations = [];

  if (!source.includes("PRIVACY: no introducir nombres")) {
    violations.push("falta el banner de datos sintéticos");
  }

  const phoneValues = literalValues(source, "phone");
  if (phoneValues.some((value) => value !== "DEMO-NO-CONTACTAR")) {
    violations.push("hay un teléfono que no es el placeholder autorizado");
  }

  if (/\b(?:\+34[\s.-]*)?[6-9](?:[\s.-]*\d){8}\b/.test(projectSources)) {
    violations.push("hay un patrón compatible con un teléfono español real en src");
  }

  if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(projectSources)) {
    violations.push("hay un patrón compatible con un correo real en src");
  }

  const ids = literalValues(source, "id");
  if (ids.some((value) => !/^demo-\d{3}$/.test(value))) {
    violations.push("hay identificadores de seed que no son sintéticos");
  }

  const allowedSensitiveFields = {
    name: "Dato sintético",
    title: "Elemento sintético",
    description: "Contenido sintético para demostración.",
    notes: "Contenido sintético para demostración.",
    location: "Ubicación de demostración",
    protocol_notes: "Protocolo sintético de demostración.",
    short_description: "Perfil completamente sintético.",
    service_description: "Servicio sintético de demostración.",
    source: "Fuente sintética",
  };
  for (const [field, placeholder] of Object.entries(allowedSensitiveFields)) {
    const values = literalValues(source, field);
    if (values.some((value) => value !== placeholder)) {
      violations.push(`${field} contiene texto fuera del placeholder sintético`);
    }
  }

  if (violations.length > 0) {
    throw new Error(`Privacy gate FAILED: ${violations.join("; ")}`);
  }

  console.log(`Privacy gate OK: ${ids.length} identificadores sintéticos; src sin teléfono/email real.`);
}

if (resolve(process.argv[1] || "") === fileURLToPath(import.meta.url)) {
  try {
    runPrivacyGate();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
