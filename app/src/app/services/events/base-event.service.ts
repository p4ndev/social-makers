export class BaseEvent{
    
    private _state : boolean = false;

    public get State() : boolean{ return this._state; }
    
    public Toggle = () : void | boolean => this._state = !this._state;

  }