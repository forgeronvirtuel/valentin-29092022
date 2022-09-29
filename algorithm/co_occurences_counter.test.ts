import { expect } from 'chai';
import {coOccurencesCounter, Inventory} from "./co_occurences_counter";

describe('coOccurences testing', () => {
    it('empty input returns empty array', () => {
        const input: Inventory[] = []
        const reference = {trait_type: "weapon", value:"gun"}
        const expected = {}

        const results = coOccurencesCounter(input, reference)

        expect(results).to.be.deep.eq(expected,
            `For an empty input, coOccurences should return an empty object. Got ${results}`)
    })
    it('Normal use case with small set of data', () => {
        const input = [
            [
                {
                    "trait_type":"weapon",
                    "value":"gun"
                },
                {
                    "trait_type":"armor",
                    "value":"leather"
                }
            ],
            [
                {
                    "trait_type":"weapon",
                    "value":"gun"
                },
                {
                    "trait_type":"armor",
                    "value":"leather"
                }
            ],
            [
                {
                    "trait_type":"weapon",
                    "value":"gun"
                },
                {
                    "trait_type":"armor",
                    "value":"steel"
                },
                {
                    "trait_type":"medal",
                    "value":"of honor"
                }
            ],
        ]
        const reference = {trait_type: "weapon", value:"gun"}
        const expected = {
            "armor:leather":2,
            "armor:steel":1,
            "medal:of honor":1
        }

        const results = coOccurencesCounter(input, reference)

        expect(results).to.be.deep.eq(expected)
    })
});
