
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFurniture = () => {
    const axiosPublic = useAxiosPublic();

    const { data: furnitures = [], isPending: loading, refetch } = useQuery({
        queryKey: ['furnitures'],
        queryFn: async () => {
            const res = await axiosPublic.get('/furniture');
            return res.data;
        }
    });


    return [furnitures, loading, refetch]

};

export default useFurniture;