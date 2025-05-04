import { Grid, Paper, Typography } from "@mui/material";

import { Fragment, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgimg from "../../../Assets/Images/Firefly graphic to show movers and packers business world with logistics trucks, containers, boxes, .jpg";
import GenericCheckbox from "../../../common-components/form-elements/genericCheckbox";
import GenericPricingCard from "../../../common-components/page-elements/genericPricingCard";
import { PLAN_DURATION_LIST } from "../../../languages/en";
import { getPlanState } from "../../../store/selectors";
import { requestAllPlan } from "../../../store/slices/PlanSlice";

const Subscriptions = () => {
  const plan = useSelector(getPlanState);
  const [filters, setFilters] = useState([]);
  const { allPlans } = plan;
  const dispatch = useDispatch();

  useEffect(() => {
    if (allPlans?.length === 0) {
      dispatch(requestAllPlan());
    }
  }, [allPlans, dispatch]);

  const onFilterChange = (evt) => {
    const { value, checked } = evt?.target;

    if (checked) {
      setFilters((prev) => [...prev, value]);
    } else {
      const updatedFilters = filters?.filter((val) => val !== value);

      setFilters(Array.from(new Set(updatedFilters)));
    }
  };
  useEffect(() => {
    console.log(filters, "Sasasa", allPlans);
  }, [filters, allPlans]);
  return (
    <Fragment>
      <Paper
        sx={{
          // top: "50%",
          // left: "50%",
          transform: "translate(0%, 0%)",

          minHeight: "84vh",
          p: 2,
          // bgcolor: "rgba(0,0,0,.1)",
          background: `url('${bgimg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    alignContent: "center",
                    px: "1rem",
                    fontWeight: "900",
                  }}
                >
                  Filters:
                </Typography>
                <GenericCheckbox
                  sx={{
                    display: "inline !important",
                  }}
                  name="moduleID"
                  id="moduleID"
                  list={PLAN_DURATION_LIST?.map((ele) => {
                    return {
                      value: ele?.value,
                      label: ele?.label,
                    };
                  })}
                  onChange={onFilterChange}
                  style={{ display: "flex" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {allPlans?.map((item, index) => {
            if (filters?.includes(item?.planDuration) || filters.length === 0) {
              return (
                <Grid
                  item
                  xs={12}
                  md={12 % allPlans?.length === 0 ? 12 / allPlans?.length : 3}
                  key={index}
                >
                  <GenericPricingCard data={item} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </Paper>
    </Fragment>
  );
};
export default memo(Subscriptions);
