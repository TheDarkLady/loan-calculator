import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <Box sx={{ px: "30px", pt: "50px", maxWidth: "1200px", display:"flex", flexDirection:"column"}}>
        <Typography variant="h3" sx={{ mb: "30px" }}>
          About This App
        </Typography>
        <Typography  sx={{mb:"30px"}}>
          This Loan Calculator App is a modern, single-page web application
          built using <strong>React JS</strong> and <strong>Material UI</strong>
          . It allows users to calculate loab EMIs (Equsted Monthly
          Installments),view a detailed amortization schedule; and see real-time
          currency conversions of their EMI using live exchange rates.
        </Typography>
        <Divider />
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          📋 Instructions for Candidates
        </Typography>
        <Typography style={{paddingBottom:"20px"}}>Please follow these instructions to complete and submit your project:</Typography>
        <ul style={{paddingLeft:"30px", paddingBottom:"20px"}}>
          <li> Push the entire project to a public <strong>GitHub repository</strong></li>
          <li> Make sure to<strong>commit regularly</strong>with clear messages after completing each feature.</li>
          <li> Use sure provided EMI formula to perform calculation.</li>
          <li> Use<strong>Context API</strong>for global state management (e.g. theme, currency).</li>
          <li> Create<strong>custom React hooks</strong>for reusable logic (e.g. EMI calculation, fetching exchange rates).</li>
          <li> Integrate the <strong>ExchangeRate API</strong>for live currency conversions.</li>
          <li> Integrate the <strong>ExchangeRate API</strong>for live currency conversions.</li>
          <li>Ensure the app is fully <strong>responsive </strong>on all screens sizes</li>
          <li>Implement both <strong>light and dark modes </strong>using Material UI's theming system</li>
          <li>Add a <strong>404 Not Found </strong>page for unmatched routes</li>
          <li>Handle runtime errors gracefully by showing an <strong>Error Page.</strong></li>
          <li>Once deployed, add the live deployement  <strong>link in About Section</strong> of youe GitHub repo</li>
          <li>Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).</li>
        </ul>
        <Typography sx={{fontSize:"14px", paddingBottom:"30px"}}>✅ Your final GitHub repository ahould include a live demo link, and your code should be readable, modular, and well-structured.</Typography>
        <Divider />
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          🔧 Features
        </Typography>
        <ul style={{paddingLeft:"30px", paddingBottom:"20px"}}>
          <li> Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table with monthly breakdown</li>
          <li>Real - time currency conversion of EMI using a live exchange rate API</li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark Lignt mode toggle for a customizable experience</li>
          <li>Collapsible header navigation on moblie screens</li>
          <li>Fully responsive UI built with Material UI</li>
        </ul>
        <Divider />
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          📦 Technologies Used
        </Typography>
        <ul style={{paddingLeft:"30px", paddingBottom:"30px"}}>
          <li><strong>React</strong> (Hooks, Routing, Context API)</li>
          <li><strong>Material UI</strong> for styling and responsive components</li>
          <li> <strong>Axios</strong> for API calls</li>
          <li><strong>Exchange Rate API</strong>for real-time currency conversion</li>
        </ul>
        <Divider />
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          🔣 EMI Formula Used
        </Typography>
        <Typography style={{paddingBottom:"20px"}}>The EMI (Equated Monthly Installment) is calculated using the standard formula:</Typography>
        <Typography style={{paddingBottom:"20px"}}>EMI = [P <span style={{fontSize:"10px"}}>x</span> R <span style={{fontSize:"10px"}}>x</span> (1+R)^N] / [(1+R)^N - 1]</Typography>
        <Typography style={{paddingBottom:"20px"}}>where:</Typography>
        <ul style={{paddingLeft:"30px", paddingBottom:"30px"}}>
          <li><strong>P = </strong> Principle loan amount</li>
          <li><strong>R = </strong> Monthly interest rate (annual rate/ 12 / 100)</li>
          <li> <strong>N = </strong> Loan duration in months</li>
        </ul>
        <Divider />
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          🌎 Currency Conversion API
        </Typography>
        <Typography style={{paddingBottom:"20px"}}>This app integrates with the free tier of the <a href="https://app.exchangerate-api.com/" style={{ color: "#0000EE", textDecoration: "underline" }}> ExchangeRate-API </a> to fetch live exchange rates.</Typography>
        <Typography >API Endpoint Example:</Typography>
        <Typography style={{paddingBottom:"20px"}}>https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</Typography>
        <Typography style={{paddingBottom:"20px"}}>You must register and obtain a free API key to use this endpoint. Then, replace YOUR_API_KEY in the app code with your actual key</Typography>
        <Divider/>
        <Typography variant="h4" sx={{ mt: "30px",mb:"20px" }}>
          🎯 Purpose of This App
        </Typography>
        <Typography style={{paddingBottom:"30px"}}>This project is designed to assess a candidate's React development skills, including:</Typography>
        <ul style={{paddingLeft:"30px", paddingBottom:"30px"}}>
          <li>React fundamentals (state, props, hooks)</li>
          <li>Component structure and code reusability</li>
          <li>Third-party API integration and live data rendering</li>
          <li>Working with table, lists, and Pagination</li>
          <li>Theme customization (dark/light mode toggle)</li>
          <li>Error handling and graceful UI fallbacks</li>
          <li>Responsive design and collapsible mobile header navigator (In Mobile view) </li>
        </ul>
        <Typography style={{fontSize:"14px", paddingBottom:"30px"}}>✨ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls</Typography>
      </Box>
    </div>
  );
};

export default About;
