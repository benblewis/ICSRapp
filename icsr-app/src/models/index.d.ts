import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerDataVisitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataVisitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vertical?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly year?: number | null;
  readonly icsrverticalsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDataVisitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DataVisitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vertical?: string | null;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly year?: number | null;
  readonly icsrverticalsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DataVisitation = LazyLoading extends LazyLoadingDisabled ? EagerDataVisitation : LazyDataVisitation

export declare const DataVisitation: (new (init: ModelInit<DataVisitation>) => DataVisitation) & {
  copyOf(source: DataVisitation, mutator: (draft: MutableModel<DataVisitation>) => MutableModel<DataVisitation> | void): DataVisitation;
}

type EagerICSRverticals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ICSRverticals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vertical?: string | null;
  readonly imageurl?: string | null;
  readonly DataVisitations?: (DataVisitation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyICSRverticals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ICSRverticals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vertical?: string | null;
  readonly imageurl?: string | null;
  readonly DataVisitations: AsyncCollection<DataVisitation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ICSRverticals = LazyLoading extends LazyLoadingDisabled ? EagerICSRverticals : LazyICSRverticals

export declare const ICSRverticals: (new (init: ModelInit<ICSRverticals>) => ICSRverticals) & {
  copyOf(source: ICSRverticals, mutator: (draft: MutableModel<ICSRverticals>) => MutableModel<ICSRverticals> | void): ICSRverticals;
}