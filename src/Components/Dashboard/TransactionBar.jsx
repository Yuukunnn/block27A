import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { DataSet } from '../../DataSet';


function TransactionBar() {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      
    
    return (
        <>
    <h2>Transactions</h2>    
    <Box sx={{ width: '100%' }}>
    <Stack spacing={3} sx={{ maxHeight: 300, overflowY: 'auto'}}>
        {
            DataSet.map((transaction, index)=>{
                return (<Item key = {index}>
                   <div>Tax ID: { transaction.txId }</div> 
                   <div>Name: { transaction.user }</div> 
                   <div>Date: { transaction.date }</div> 
                   <div>Spend: { transaction.cost }</div> 
                </Item>)
            })
        }
    </Stack>
  </Box>
  </>
    )
}

export default TransactionBar