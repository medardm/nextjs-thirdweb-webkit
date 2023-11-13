import '@testing-library/jest-dom'
import {describe, expect, it} from "@jest/globals";
import userFactory from "@/database/factory/user.factory";

describe('User factory', () => {
  it('creates multiple records', async () => {
    const records = await userFactory.create(5)
    console.log(records)
    expect(records).toHaveLength(5)
  })
})
