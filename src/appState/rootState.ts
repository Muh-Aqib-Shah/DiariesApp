import {Diary}  from "../interfaces/diary.interface";
import {User}  from "../interfaces/user.interface";
import {Entry}  from "../interfaces/entry.interface";


type rootState = {
    auth: {
        token: string | null;
        isAuthenticated: boolean;
      };
      diary: {
        diaries: Diary[],
        isLoading: boolean;
        error: boolean;
      };
      entries: Entry[];
      user: User | null;
}
export default rootState;