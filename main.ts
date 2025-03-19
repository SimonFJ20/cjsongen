import { gen, repr } from "./mod.ts";

if (import.meta.main) {
  const def: repr.hir.Struct[] = [
    {
      name: "receipts_one_res",
      values: {
        v: "str",
      },
    },
  ] as const;

  const tree = def
    .map(repr.mir.fromHir)
    .map(repr.fromMir);

  console.log(tree.map(gen.c.typedef.structDef).join("\n\n"));
  console.log();
  console.log(tree.map(gen.c.json.deserializerDef).join("\n\n"));
  console.log();
  console.log(tree.map(gen.c.json.deserializerImpl).join("\n\n"));
}
