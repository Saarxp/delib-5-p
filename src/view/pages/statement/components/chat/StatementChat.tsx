import { FC, useState } from 'react'
import { Statement } from 'delib-npm'
import StatementChatMore, { handleCreateSubStatements } from '../StatementChatMore';

//icons

import Text from '../../../../components/text/Text';
import StatementChatSetOption from '../StatementChatSetOption';
import ProfileImage from './ProfileImage';
import { store } from '../../../../../model/store';
import Solution from '../general/Solution';
import { useNavigate } from 'react-router-dom';
import EditTitle from '../../../../components/edit/EditTitle';






interface Props {
  statement: Statement
  showImage: Function
  page: any,
  hasChildren:boolean
}

const StatementChat: FC<Props> = ({ statement, showImage, page, hasChildren }) => {
  const navigate = useNavigate();


  // const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const userId = store.getState().user.user?.uid;
  const creatorId = statement.creatorId;

  const isMe = userId === creatorId;
  const { isOption } = statement;

  function handleEdit() {
    if (userId === creatorId) setIsEdit(true);
    else {
      handleCreateSubStatements(statement, navigate, page)
    }
  }



  return (
    <>

      <div className={isMe ? `statement__chatCard statement__chatCard--me` : "statement__chatCard statement__chatCard--other"}>
        <div className="statement__chatCard__left">

          <ProfileImage statement={statement} showImage={showImage} />
          <StatementChatSetOption statement={statement} />
        </div>

        <div className={isOption ? "statement__bubble statement__bubble--option" : "statement__bubble"}>
          <div className={isMe ? "bubble right" : "bubble left"}>
            <div className="statement__bubble__text" onClick={handleEdit}>
            
               <div className='statement__bubble__text__text'>{!isEdit ?<Text text={statement.statement} /> : <EditTitle statement={statement} setEdit={setIsEdit} isTextArea={true} />}</div>
            
              <Solution statement={statement} />
            </div>
            {hasChildren?<div className="statement__bubble__more">

              <StatementChatMore statement={statement} page={page} hasChildren={hasChildren} />
            </div>:null}
          </div>
        </div>
      </div>
    </>
  )
}




export default StatementChat;