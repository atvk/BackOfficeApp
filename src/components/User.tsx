import { useDispatch } from 'react-redux';
import { UserModel } from '../models/User';
import { LikeButton } from './LikeButton';
import { removeUser } from '../slice/usersSlice';
import { AppDispatch } from '../store/store';

export interface UserProps { user: UserModel }

export const User = ({ user }: UserProps) => {

  const { age, id, name } = user;

  const dispatch = useDispatch<AppDispatch>()
  const deleteUser = () => { dispatch(removeUser(user)) }

  return (
    <div>
      <div className='flex justify-between items-center gap-3'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{age}</div>
        <LikeButton user={user} />
        <button onClick={deleteUser} className='text-pink-600 cursor-pointer'
        >&times;</button>
      </div>

    </div>


  )
}