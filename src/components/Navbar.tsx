import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import LanguageToggle from "./LanguageToggle"

export default function Navbar() {
  return (
<AppBar position="static" className="bg-white shadow text-gray-900 px-4">
  <Toolbar className="flex items-center justify-between">
    <Typography variant="h6" className="font-bold">
      Sajilni Store
    </Typography>
    <div className="ltr:ml-auto rtl:mr-auto">
      <LanguageToggle />
    </div>
  </Toolbar>
</AppBar>
  )
}
