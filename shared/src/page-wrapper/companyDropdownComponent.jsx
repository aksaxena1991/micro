import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { memo } from "react";
import OBJ from "../../languages/fr.json";
import GenericDropdown from "../form-elements/genericDropdown";

const CompanyDropdownComponent = memo(
  ({ open, setOpen, onCompanyChange, allCompanies }) => {
    return (
      <Dialog
        open={open}
        fullWidth
        maxWidth="xs"
        onClose={() => setOpen(!open)}
        aria-labelledby="alert-dialog-title-2"
        aria-describedby="alert-dialog-description-2"
      >
        <DialogTitle id="alert-dialog-title-2">
          {OBJ.SELECT_COMPANY_LABEL}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <GenericDropdown
                onChange={(evt) => onCompanyChange(evt)}
                data={[
                  { label: "Create New Company", value: 0 },
                  ...allCompanies?.map((el) => {
                    return { value: el.id, label: el.companyName };
                  }),
                ]}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
);
export default CompanyDropdownComponent;
