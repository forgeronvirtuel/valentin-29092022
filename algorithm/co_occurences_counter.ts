export interface InventoryItem {
    "trait_type":string,
    "value":string
}

export type Inventory = InventoryItem[]

export type CoOccurence = { [key: string]: number }

// coOccurencesCounter counts all object sharing a place into the inventory with the given reference.
// It uses a O(n) with n the number of Inventory object since we iterate over all inventories
// to filter if the current inventory has the reference object and to count each co-occurence.
export function coOccurencesCounter(inventories : Inventory[], reference : InventoryItem): CoOccurence {
    let res: CoOccurence = {}

    // Loop through all inventories...
    for(let inventory of inventories) {
        let shouldBeAdded = false
        const bufferCoOccurences: CoOccurence = {}

        // ...and through  all items for each inventories ...
        for(let item of inventory) {

            // ... to check if the reference is present ...
            if(item.trait_type == reference.trait_type && item.value == reference.value) {
                shouldBeAdded = true
                continue
            }

            // ... and to prepare the final results ...
            const key = `${item.trait_type}:${item.value}`
            if(key in bufferCoOccurences) {
                bufferCoOccurences[key]++
            } else {
                bufferCoOccurences[key]=1
            }
        }

        // ... and if the reference is present, add all co-occurrences to the final result.
        if(shouldBeAdded) {
            for(let key of Object.keys(bufferCoOccurences)) {
                if(res[key]) {
                    res[key] += bufferCoOccurences[key]
                } else {
                    res[key] = bufferCoOccurences[key]
                }
            }
        }
    }
    return res
}