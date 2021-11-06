import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// import CardActions from "@mui/material/CardActions";

const DadosCard = ({ title, content, icon, color }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          title={title}
          action={
            <Avatar sx={{ backgroundColor: "primary.main" }}>{icon}</Avatar>
          }
        />
        <CardContent>
          <Typography variant="h5" color={color} component="div">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DadosCard;
