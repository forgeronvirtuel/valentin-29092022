export interface InventoryItem {
    "trait_type":string,
    "value":string
}

export type Inventory = InventoryItem[]

export type CoOccurence = { [key: string]: number }

export function coOccurencesCounter(inventories : Inventory[]): CoOccurence {
    return {}
}