# PowerSemiotics — archivo histórico

**Este repositorio ya no publica nada.** Se conserva por su historial.

Hasta agosto de 2026 fue todo `powersemiotics.com`: la portada corporativa y,
colgando de ella, la obra escrita completa. En agosto de 2026 el sitio se dividió
en dos y este repositorio quedó vacío de contenido.

## Dónde vive ahora cada cosa

| Qué | Repositorio | Se publica en |
|---|---|---|
| Portada corporativa | [alcyedmundo281.github.io](https://github.com/alcyedmundo281/alcyedmundo281.github.io) | <https://powersemiotics.com/> |
| Obra escrita (101 páginas, 6 áreas) | [medsemiotics](https://github.com/alcyedmundo281/medsemiotics) | <https://powersemiotics.com/medsemiotics/> |

El dominio propio pasó de este repositorio al del sitio de usuario. Ese cambio es
lo que permite que `medsemiotics`, como repositorio de proyecto, se sirva bajo
`/medsemiotics/`: un dominio configurado sobre un repositorio de proyecto sirve
solo ese repositorio, mientras que si se configura sobre el sitio de usuario, los
demás repositorios cuelgan de él como subrutas.

Las URL anteriores no se han perdido: el sitio de usuario incluye un `404.html`
que redirige a `/medsemiotics/` las 121 direcciones que se mudaron, conservando
parámetros y fragmento.

## Consultar el estado anterior

La etiqueta **`archivo-pre-migracion`** conserva el árbol íntegro previo al
reparto: 222 archivos, 106 páginas, 20 MB.

```bash
git checkout archivo-pre-migracion
```

También puede consultarse en la web:
<https://github.com/alcyedmundo281/PowerSemiotics/tree/archivo-pre-migracion>

Ahí está lo que no sobrevivió a la migración y no existe en los repositorios
nuevos:

- `ai_dashboard.html`, el panel de consultas a un modelo de lenguaje, y su
  `assets/ask-ai.js`
- la integración con Supabase de tres páginas, con su `supabase_schema.sql`
- las maquetas `stitch_*` y los artefactos de verificación `jules-scratch/`
- la versión de las páginas anterior al autoalojamiento, cuando aún cargaban
  Tailwind, React, Babel, Font Awesome y las fuentes desde CDN

## Por qué se dividió

La obra escrita y la presentación corporativa tenían ritmos de cambio y públicos
distintos, y convivían en un mismo árbol donde cada retoque de la portada tocaba
el mismo repositorio que los módulos de estudio. Separarlas permitió además
publicar el contenido con licencia e identificador propios: `medsemiotics` se
distribuye bajo CC BY-SA 4.0 y tiene su propio DOI.
