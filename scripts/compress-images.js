import fs from 'fs-extra'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, '../public/projects')
const outputDir = path.join(__dirname, '../public/projects-compressed')

async function compressImages() {
  await fs.ensureDir(outputDir)
  const files = await fs.readdir(sourceDir)

  await Promise.all(files.map(async file => {
    const ext = path.extname(file).toLowerCase()
    const inputPath = path.join(sourceDir, file)
    const outputPath = path.join(outputDir, file)

    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      await sharp(inputPath)
        .resize({ width: 1200 }) 
        .jpeg({ quality: 70 })   
        .toFile(outputPath)    
    } else {
      await fs.copy(inputPath, outputPath)
    }
  }))

  console.log('✅ Bilder komprimiert!')

  await fs.remove(sourceDir)  
  await fs.move(outputDir, sourceDir)

  console.log('✅ Ordner ersetzt: Originalbilder wurden durch komprimierte ersetzt.')
}

compressImages().catch(err => {
  console.error('❌ Fehler beim Komprimieren:', err)
})
