import { merger } from "@utils"
import { InferState, State } from "./types/state"

export class BaseRegExp<CurState extends State> {
  protected merge

  constructor(protected state: InferState<CurState>) {
    this.merge = merger(this.state)
  }

  getState(): InferState<CurState> {
    return {
      msg: this.state.msg,
      curExp: this.state.curExp,
      prvExp: this.state.prvExp,
      names: [...this.state.names],
      groups: [...this.state.groups],
    }
  }
}
