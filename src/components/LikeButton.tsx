
import { useDispatch } from 'react-redux';

import { toggleLike } from '../slice/usersSlice'
import { AppDispatch } from '../store/store';
import { UserModel } from '../models/User';

interface LikeButtonProps {
  user: UserModel
}

export const LikeButton = ({ user }: LikeButtonProps) => {


  const dispatch = useDispatch<AppDispatch>()

  const LikeButton = () => { dispatch(toggleLike(user)) }

  return (
    <button
      onClick={LikeButton}
      className='flex border border-pink-600 rounded-xl p-2'
    >
      {
        user.isLiked ? 'дизлайк' : 'лайк'
      }
    </button>
  )
}