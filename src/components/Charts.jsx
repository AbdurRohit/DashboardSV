import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useContext } from 'react';
import { Grid } from '@mui/material';
import { NewsDataContext } from '../App';

const DashboardChart = () => {
    const { rowsArray } = useContext(NewsDataContext);
  
    const getCategories = () => {
      const categories = new Set();
      rowsArray.forEach((row) => categories.add(row.category));
      return Array.from(categories);
    };
 
    const getCategoryViews = () => {
      const categoryViews = {};
      rowsArray.forEach((row) => {
        const { category, views } = row;
        if (categoryViews[category]) {
          categoryViews[category] += views;
        } else {
          categoryViews[category] = views;
        }
      });
      return categoryViews;
    };
  
    const categories = getCategories();
    const categoryViews = getCategoryViews();
  
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: categories }]}
            series={[{ data: Object.values(categoryViews) }]}
            width={800}
            height={250}
          />
        </Grid>
      </React.Fragment>
    );
  };
  
  export default DashboardChart;