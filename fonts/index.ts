import { Suranna, EB_Garamond } from "@next/font/google";

const suranna = Suranna({ weight: "400", subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const title = suranna;
export const text = garamond;
