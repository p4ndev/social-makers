
type rejectCallback<T>   = ( reason? : T ) => void;

type resolveCallback<T>  = ( value : T | PromiseLike<T> ) => void;

export { resolveCallback, rejectCallback }
