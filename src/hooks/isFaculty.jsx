import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Pages/providers/AuthProvider";
const useFaculty = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isFaculty, isLoading: isFacultyLoading} = useQuery({
        queryKey: ['isFaculty', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/faculty/${user?.email}`);
            return res.data.faculty;
        }
        
    })
    return [isFaculty, isFacultyLoading]
}
export default useFaculty;