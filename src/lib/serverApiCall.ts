"use client";
import axios from "axios";
import { BASE_URl } from "./request";
import { useQuery } from "../components/exportComponents/SessionProviders";

export const webToken = "acnRX881tjRVA+KX+d5QEZ50iy1TVDg1DQ0CBPRIvBI=";
// const webToken = process.env.WEB_TOKEN;
// console.log("asdasdasd", process.env);
const accessUserToken: string = localStorage.getItem("access-token")!;

// if (typeof window !== "undefined") {
//   // Code that accesses localStorage or other client-side APIs
//   console.log("accessToken:", accessToken);
// }
//  const accessToken = localStorage.getItem("access-token");

export const ServerApiPostCall = ({ api, data }: any) => {
  const postMethod = axios.post(`${BASE_URl}${api}`, data, {
    headers: {
      web_token: `${webToken}`,
    },
  });
  return postMethod;
};
export const ServerApiBookingPostCall = async ({ api, data }: any) => {
  const token = localStorage.getItem("access-token");
  if (!token) {
    throw new Error("Access token not found");
  }
  const res = await axios.post(`${BASE_URl}${api}`, data, {
    headers: {
      web_token: `${webToken}`,
      Authorization: `Bearer ${token}`,
    },
  });
  return res?.data;
};

// export const ServerApGetProfile = ({ api }: any) => {
//   // Make sure accessToken is not null before using it
//   const getProfileMethod = axios.get(`${BASE_URl}${api}`, {
//     headers: {
//       web_token: `Bearer ${token}`,
//     },
//   });
//   return getProfileMethod;
// };

export const ServerApiPatchProfile = ({ api, data }: any) => {
  const patchProfileMethod = axios.patch(`${BASE_URl}${api}`, data, {
    headers: {
      web_token: `${webToken}`,
      Authorization: `Bearer ${accessUserToken}`,
    },
  });
  return patchProfileMethod;
};
export const ServerApiPostProfile = ({ api, data }: any) => {
  const postProfileMethod = axios.post(`${BASE_URl}${api}`, data, {
    headers: {
      web_token: `${webToken}`,
      Authorization: `Bearer ${accessUserToken}`,
    },
  });
  return postProfileMethod;
};

export const useGetData = ({ api }: any) => {
  console.log("api", api);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["roomList"],
    queryFn: async () => {
      const res: any = await axios.get(`${BASE_URl}${api}`, {
        headers: {
          web_token: `${webToken}`,
        },
      });

      return res?.data;
    },
  });
  return [data, refetch, isLoading];
};
export const useGetSelectedRoomList = ({ api }: any) => {
  console.log("api", api);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["selectedRoomList"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      if (!token) {
        throw new Error("Access token not found");
      }
      const res = await axios.get(`${BASE_URl}${api}`, {
        headers: {
          web_token: `${webToken}`,
          Authorization: `Bearer ${token}`,
        },
      });
      return res?.data;
    },
  });
  return [data, refetch, isLoading];
};

export const useGetBookingSingleData = ({ api }: any) => {
  console.log("api", api);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["roomList"],
    queryFn: async () => {
      const res: any = await axios.get(`${BASE_URl}${api}`, {
        headers: {
          web_token: `${webToken}`,
        },
      });

      return res?.data;
    },
  });
  return [data, refetch, isLoading];
};

export const useGetProfile = () => {
  const {
    data: profile,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      if (!token) {
        throw new Error("Access token not found");
      }
      const res = await axios.get(`${BASE_URl}/auth/hotel-user/profile`, {
        headers: {
          web_token: `${webToken}`,
          Authorization: `Bearer ${token}`,
        },
      });
      return res?.data;
    },
  });
  return [profile, refetch, isLoading];
};
