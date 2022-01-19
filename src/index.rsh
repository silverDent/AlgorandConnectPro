'reach 0.1';
'use strict';


export const main =
  Reach.App(
    {},
    [
    Participant('Company', {
      request: Fun([UInt], UInt), 
      getUserRequest: Fun([UInt], Object({ isRequested: Bool,
      requestedPayment: UInt })),
      getuserBalanceAfterPayment: Fun([], UInt),  
      showAnyValue: Fun([UInt], Null),  
      showPaymentCount: Fun([UInt], Null),  
      getPayment: Fun([], UInt), 
      getuserBalanceBeforePayment: Fun([], UInt), 
      getuserLastBalance: Fun([], UInt), 
    }),

    Participant('Users', { getControlBalance: Fun([], UInt),
                  approve: Fun([UInt, UInt], Bool),  
                  showAnyValue: Fun([UInt], Null),
                  getCompanyBalance: Fun([], UInt),   
                  approveUserRequest: Fun([UInt, Bool, UInt], Bool),            
    })
    ],

    (user, Company) => {
      user.publish();
      commit();

      const mat = 2;

      Company.only(() => {
        const getControlBalance = declassify(interact.getControlBalance()); 
        assume(getControlBalance > 0); 
      });
      Company.publish(getControlBalance);
      commit();

      user.only(() => {   
        const howMuch = declassify(interact.getPayment());
        assume(howMuch > 0); 
        assume(getControlBalance > howMuch); 
      });
      user.publish(howMuch);
      commit();

     /* user.publish();
      require(howMuch > 0);
      require(getControlBalance > howMuch);
      
      commit();

      user.only(() => {
        
        const cycleCount = getControlBalance / howMuch;
        assume(cycleCount > 0); 
      });
      user.publish(cycleCount);
     
      commit();
      */
  

      user.publish();
 

      var [bal, usgVal, paymentCount]  = [0, 0, 0];
      invariant(bal == 0);
      while ( usgVal == 0 ) {
        //assert(cycleCount > 0);

        commit();

        user.only(() => {
          interact.showPaymentCount(paymentCount + 1);
        });

     

        user.only(() => {
          const tempBalanceofuser0 =  declassify(interact.getuserBalanceBeforePayment()); 
        });
        
        user.publish(tempBalanceofuser0);

        commit();
        
        wait(mat);
        
        user.pay(howMuch);
        
        //transfer(balance()).to(Company);

        commit();

        user.only(() => {
          const  { isRequested, requestedPayment } = declassify(interact.getUserRequest(balance()));
          assume(requestedPayment <= balance());
         });
        user.publish(isRequested, requestedPayment);
        require(requestedPayment <= balance());
        commit();

        Company.only(() => {
              const result = declassify(interact.approveUserRequest(balance(), isRequested, requestedPayment)); 
        });
        Company.publish(result);
        
       
  
        commit();
        
        
       // user.publish();
        


        user.only(() => {
          const tempBalanceofuser =  declassify(interact.getuserBalanceAfterPayment()); 
        });
        
        user.publish(tempBalanceofuser);
       

        if ( tempBalanceofuser >= getControlBalance) {
         
          if(result) {
            transfer(requestedPayment).to(user);
          }
          //transfer(balance()).to(Company);
          [bal, usgVal,paymentCount ] = [bal, 0, paymentCount + 1];
          continue; }
        else {
          [bal, usgVal, paymentCount] = [bal, 1, paymentCount];
          continue;
        } 


      }

      commit();
      user.only(() => {
        const tempBalanceofuserX =  declassify(interact.getuserLastBalance());
      });
      user.publish(tempBalanceofuserX);
      transfer(balance()).to(Company);
      commit();

      Company.only(() => {
        const tempBalanceofCompanyY =  declassify(interact.getCompanyBalance());
      });
      Company.publish(tempBalanceofCompanyY);




        
      

        

      commit(); } );
