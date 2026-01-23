import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { darkBrand } from "@/theme/colors";

export default function FAQSection() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "How do I hire a freelancer on the platform?",
      answer:
        "Simply create a free account, post your project with details and budget, and you’ll start receiving proposals from qualified freelancers within minutes. You can review their profiles, ratings, and past work before hiring.",
    },
    {
      question: "Can freelancers from any country join?",
      answer:
        "Yes! Our platform is global. Freelancers from all countries can create profiles, showcase their skills, and apply for projects in multiple currencies and time zones.",
    },
    {
      question: "How are payments handled securely?",
      answer:
        "All payments are processed through our secure escrow system. The client funds the project upfront, and freelancers get paid once the work is approved — ensuring full protection for both sides.",
    },
    {
      question: "Do I need to pay to create a freelancer or client account?",
      answer:
        "No. Creating an account is completely free for both clients and freelancers. You only pay a small service fee when a project is successfully completed.",
    },
    {
      question: "What is a Business or Plus account, and what are the benefits?",
      answer:
        "Business and Plus accounts are designed for power users who need more flexibility and advanced tools. They include benefits such as priority support, lower service fees, enhanced profile visibility, team management features, and exclusive access to verified freelancers. You can upgrade anytime directly from your account dashboard.",
    },
  ];

  return (
    <Grid container width="100%" display="flex" justifyContent="center" position="relative">
    <Grid size={{ lg: 8, md: 10, sm: 12, xs: 12 }}
      sx={{
        px: 2,
        mt: 10,
        mb: 12,
        mx: "auto",
        display: "flex",
        position: 'relative',
        flexDirection: "column",
        gap: 2, // spacing between cards
      }}
    >
      <Typography zIndex={998} fontSize={38} fontWeight={550} color={grey[900]} textAlign="center" mb={4}>
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Box
          key={index}
          sx={{
            px: 2,
            py: 1,
            zIndex: 998,
            borderRadius: 5,
            backgroundColor: grey[50],
            overflow: "hidden", // keeps corners clean
            ':hover': { background: grey[50] }
          }}
        >
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            square // removes built-in rounding
            sx={{
              backgroundColor: "transparent", // use parent bg
              boxShadow: "none",
              "&:before": { display: "none" },
              ':hover': { background: grey[50] }
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RemoveIcon sx={{ color: darkBrand }} />
                ) : (
                  <AddIcon sx={{ color: darkBrand }} />
                )
              }
              sx={{
                "&:hover": { backgroundColor: grey[50] },
              }}
            >
              <Typography color={grey[900]} fontSize={18}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography px={1} color={grey[800]} fontSize={14}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Grid>
    <Box
      sx={{
        zIndex: 5,
        top: '-35%',
        width: '100%',
        aspectRatio: '16/9',
        position: 'absolute',
        bgcolor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url(/assets/vector.svg)'
      }}
    />
    </Grid>
  );
}
