import { Typography, Accordion, AccordionDetails, AccordionSummary, Box, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstallInstructions from '../InstallInstruction';
import { Circle } from '@mui/icons-material';

const InstallInstructionsContainer = () => {
  const offlineInstructions = [
    { label: 'General install instructions:' },
    { instructions: 'Ensure that you have installed the following installed:' },
    { bullet: ['Docker', 'https://www.docker.com/'] },
    { bullet: ['Minikube', 'https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download'] },
    { bullet: ['Helm', 'https://v3-1-0.helm.sh/docs/intro/install/'] },
    { bullet: ['Kubernetes Kubectl', 'https://kubernetes.io/docs/tasks/tools/'] },
    { instructions: 'Start your cluster by running the following command in your home directory:' },
    { code: 'minikube start' },
    { instructions: 'Once Minikube is running, install the Prometheus-operator by running the following commands in your home directory:' },
    { code: 'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo add stable https://charts.helm.sh/stable\nhelm repo update' },
    { instructions: 'Deploy Prometheus on your cluster by running the following command in your home directory:' },
    { code: 'helm install prometheus prometheus-community/kube-prometheus-stack' },
    { instructions: 'Run Prometheus cluster on port 9090 by running the following command in your home directory:' },
    { code: 'kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090' },
    { instructions: 'View the Prometheus dashboard by navigating to the following page:' },
    { bullet: ['https://localhost:9090/', 'https://localhost:9090/'] },
    { label: 'The following are entirely optional and only need to be completed if you wish to access advanced visualizations via Grafana:' },
    { instructions: 'Run Grafana cluster on port 9090 by running the following command in your home directory:' },
    { code: 'kubectl port-forward deployments/prometheus-grafana 3000' },
    { bullet: ['https://localhost:3000/', 'https://localhost:3000/'] },
  ];

  const awsInstructions = [
    { label: 'General install instructions:' },
    { instructions: 'Ensure that you have installed the following installed:' },
    { bullet: ['AWS Command Line Interface', 'https://aws.amazon.com/cli/'] },
    { bullet: ['AWS EKS Command Line Interface (eksctl)', 'https://eksctl.io/installation/'] },
    { bullet: ['Helm', 'https://v3-1-0.helm.sh/docs/intro/install/'] },
    { bullet: ['Kubernetes Kubectl', 'https://kubernetes.io/docs/tasks/tools/'] },
    { instructions: 'Clone the PodMD repository from Github:' },
    { instructions: 'Configure AWS by running the following command from your new PodMD directory:' },
    { reference: ['AWS User Guide: Manage access keys for IAM users', 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html'] },
    { code: 'aws configure' },
    { instructions: 'Create AWS EKS Clusters, example command is provided below with region set to us-west-1. Clusters must be at least size medium to operate:' },
    { code: 'eksctl create cluster --name=prometheus-3 --region=us-west-1 --version=1.31 --nodegroup-name=promnodes --node-type t2.medium --nodes 2' },
    { instructions: 'Once AWS Cluster is running, install the Prometheus-operator by running the following commands in your home directory:' },
    { code: 'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo add stable https://charts.helm.sh/stable\nhelm repo update' },
    { instructions: 'Deploy Prometheus on your cluster by running the following command in your home directory:' },
    { code: 'helm install prometheus prometheus-community/kube-prometheus-stack' },
    { instructions: 'Run Prometheus cluster on port 9090 by running the following command in your home directory:' },
    { code: 'kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090' },
    { instructions: 'View the Prometheus dashboard by navigating to the following page:' },
    { bullet: ['https://localhost:9090/', 'https://localhost:9090/'] },
    { label: 'The following are entirely optional and only need to be completed if you wish to access advanced visualizations via Grafana:' },
    { instructions: 'Run Grafana cluster on port 9090 by running the following command in your home directory:' },
    { code: 'kubectl port-forward deployments/prometheus-grafana 3000' },
    { bullet: ['https://localhost:3000/', 'https://localhost:3000/'] },
  ];

  function formatInstructions(inputArr) {
    const outputArr = [];
    inputArr.forEach((ele, i) => {
      let eleKey = Object.keys(ele);
      if (eleKey == 'code') {
        outputArr.push(<InstallInstructions key={`offlineInstructions${i}`} instructions={ele[eleKey]} index={ele[eleKey]} />);
      } else if (eleKey == 'instructions') {
        outputArr.push(<Typography key={`offlineInstructions${i}`} sx={{ paddingLeft: 3, paddingTop: 1, paddingBottom: 1, whiteSpace: 'pre-line' }}>{ele[eleKey]}</Typography>);
      } else if (eleKey == 'bullet') {
        outputArr.push(<Typography key={`offlineInstructions${i}`} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 5, paddingBottom: 0, whiteSpace: 'pre-line' }}><Circle sx={{ width: '8px', paddingRight: 0.5 }} /><Link href={ele[eleKey][1]}>{ele[eleKey][0]}</Link></Typography>);
      } else if (eleKey == 'label') {
        outputArr.push(<Typography key={`offlineInstructions${i}`} sx={{ paddingLeft: 2, paddingTop: 1, paddingBottom: 0, whiteSpace: 'pre-line', fontWeight: 700 }}>{ele[eleKey]}</Typography>);
      } else if (eleKey == 'reference') {
        outputArr.push(<Typography key={`offlineInstructions${i}`} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 5, paddingBottom: 1, whiteSpace: 'pre-line' }}>Reference:<Link sx={{ paddingLeft: 1 }} href={ele[eleKey][1]}>{ele[eleKey][0]}</Link></Typography>);
      }
    });
    return outputArr;
  }

  const formattedOfflineInstructions = formatInstructions(offlineInstructions);
  const formattedAwsInstructions = formatInstructions(awsInstructions);

  return (
    <>
      <Typography variant='h2' className='sectionTitle' sx={{ color: 'rgb(225,225,225)', fontSize: 30, fontWeight: 700, textAlign: 'center', paddingBottom: 2, paddingTop: 15 }}>Instructions</Typography>
      <Box id='accordionBox'>
        <Accordion className='installAccordion' sx={{ zIndex: 1 }}>
          <AccordionSummary
            className='installAccordionHeader'
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <Typography className='installAccordionText'>If running locally on Minikube:</Typography>
          </AccordionSummary>
          <AccordionDetails
            className='installAccordionBody'>
            {formattedOfflineInstructions}
          </AccordionDetails>
        </Accordion>
        <Accordion className='installAccordion' sx={{ zIndex: 1 }}>
          <AccordionSummary
            className='installAccordionHeader'
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <Typography className='installAccordionText'>If running on AWS:</Typography>
          </AccordionSummary>
          <AccordionDetails
            className='installAccordionBody'>
            {formattedAwsInstructions}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default InstallInstructionsContainer;