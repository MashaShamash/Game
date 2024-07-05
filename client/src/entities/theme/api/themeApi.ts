import type { AxiosResponse } from "axios";
import type { Theme } from "../types/themeTypes";
import axiosInstance from "../../../services/axiosInstance";

class ThemeApi{
    static getAllTheme = async ():Promise<Theme[]>=>{
        const response: AxiosResponse<{ message: string; themes: Theme[] }> =
        await axiosInstance.get('/themes');
  
      return response.data.themes;
    }
}
export default ThemeApi