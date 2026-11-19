/**
 * Sanity checks on the sample input files so parser tests start from known data.
 */
import fs from 'node:fs'
import { describe, expect, it } from 'vitest'
import { SAMPLE_FILES } from '../helpers/sampleData'

describe('sample data files', () => {
  it.each(Object.entries(SAMPLE_FILES))(
    '%s file exists and is not empty',
    (_category, filePath) => {
      expect(fs.existsSync(filePath)).toBe(true)
      expect(fs.statSync(filePath).size).toBeGreaterThan(0)
    },
  )
})
