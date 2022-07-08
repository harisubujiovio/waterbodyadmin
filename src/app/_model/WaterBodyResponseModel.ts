export interface HydrologicalParameter {
    waterspreadArea: number;
    registeredAyacut: number;
    capacity: number;
    numberoffillings: number;
    firstmonthfilling: string;
    waterAvailability: string;
    monthdryup: string;
    numberofsources: number;
    catchmentType: string;
    createdBy?: string;
    lastModifiedBy?: string;
    sources: HydrologicalSourceSupply[]
    prioritysources: HydrologicalSourceSupply[]
    id?: string;
  }

  export interface HydrologicalSourceSupply {
    source: string;
  }

  export interface HydrologicalPrioritySourceSupply {
    prioritysource: string;
  }