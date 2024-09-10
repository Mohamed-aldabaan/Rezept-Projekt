
// eslint-disable-next-line react/prop-types
const ConfirmModal = ({confirm, cancel}) => {
  return (
    <div className="confirmmodal">
      <div className="box">
        <p style={{'padding': '10px'}}>Möchten Sie dieses Rezept wirklich löschen?</p>
        <div>
          <button onClick={confirm}>Ja</button>
          <button onClick={cancel}>Nein</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
