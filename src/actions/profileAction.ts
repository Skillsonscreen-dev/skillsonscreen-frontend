import { setCategory } from "../slices/categorySlice";
import { setProfile } from "../slices/profileSlice";
import AxiosCall from "../utils/axios";
import Message from "../views/components/message/Message";


export const fetchProfileAction = async (dispatch: Function) => {
    try {
        const res = await AxiosCall({
            method: "GET",
            path: "/user/profile"
        });
        dispatch(setProfile({
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            phone: res.data.phoneNumber,
            profileImg: res.data.profileImg,
            userType: res.data.userType,
            fetchedProfile: true,
            
        }))
    } catch (err: any) {
        Message.error(err?.response.data.message)
    }
}

export const fetchCategories = async (dispatch: Function) => {
    try {
        dispatch(setCategory({
            isLoading: true,
        }))
        const res = await AxiosCall({
            method: "GET",
            path: "/categories/fetch"
        });

        if (res.status == 1) {
            dispatch(setCategory({
                isLoading: false,
                hasFetched: true,
                items: res.data
            }))
        } else {
            Message.error("An error occurrend while fetching categories")
            dispatch(setCategory({
                isLoading: false
            }))
        }
    } catch (err: any) {
        Message.error(err?.response.data.message)
    }
}