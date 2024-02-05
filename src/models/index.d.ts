import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerICSRverticals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ICSRverticals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vertical?: string | null;
  readonly imageurl?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ICSRverticals = LazyLoading extends LazyLoadingDisabled ? EagerICSRverticals : LazyICSRverticals

export declare const ICSRverticals: (new (init: ModelInit<ICSRverticals>) => ICSRverticals) & {
  copyOf(source: ICSRverticals, mutator: (draft: MutableModel<ICSRverticals>) => MutableModel<ICSRverticals> | void): ICSRverticals;
}