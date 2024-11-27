import { User } from './User';
import { UserModel } from '../models/User';

interface UsersListProps {
    users: UserModel[]
    isLoading: boolean
}

export const UsersList = ({ users, isLoading }: UsersListProps) => {

    return (
        <div className='grid justify-center items-center gap-5'>
            {
                isLoading ?
                    <div>Loading...</div> :
                    <div className='grid justify-center items-center gap-3'>


                        {users.map((user) => (
                            <User
                                key={user.id}
                                user={user}
                            />
                        ))}
                    </div>
            }
        </div>
    )
}