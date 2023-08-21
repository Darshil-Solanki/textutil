export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alert &&
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{marginBottom:0}} role="alert">
      <p style={{marginBottom:0}}>{props.alert.msg}</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
