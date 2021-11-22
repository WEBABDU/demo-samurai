import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requared } from "../../utils/validators/validators";
import { Textarea } from "../cammon/FormsControl/formsControl";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Massage";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((d, index) => (
    <DialogItem key={index} name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.OnAddMessage(values.newMessageBody);
    props.OnAddMessage((values.newMessageBody = ""));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="newMessageBody"
          component={Textarea}
          validate={[requared, maxLength50]}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
