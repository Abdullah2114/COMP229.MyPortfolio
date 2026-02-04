export default function Logo() {
  return (
    <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
      <div style={{
        width:"32px",height:"32px",
        background:"#00ffcc",
        clipPath:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      }}></div>
      <strong>AM</strong>
    </div>
  );
}
