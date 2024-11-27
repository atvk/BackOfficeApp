import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { UsersList } from '../components/UsersList'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserModel } from '../models/User';
import { fetchUsers, selectIsLoading, selectUsers } from '../slice/usersSlice';

export const App = () => {

	const users = useSelector<RootState, UserModel[]>((selectUsers));
	const isLoading = useSelector<RootState, boolean>((selectIsLoading));
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => { dispatch(fetchUsers()) }, [dispatch])
	return (
		<div className='grid mt-5 gap-2 justify-center items-center'>
			<UsersList users={users} isLoading={isLoading} />
		</div>
	)
}
