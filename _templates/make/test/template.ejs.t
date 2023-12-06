---
to: src/tests/jest/<%= name %>.test.ts
---
import '@testing-library/jest-dom'
import {beforeAll, describe, expect, it} from "@jest/globals";
import refreshDatabase from "@/database/refreshDatabase";

beforeAll(async () => {
  await refreshDatabase()
  await seedPreRequisiteData()
})

describe('<%= name %> test', () => {
  it('creates new <%= name %>', async () => {
    expect(false).toBeTruthy()
  })
})


