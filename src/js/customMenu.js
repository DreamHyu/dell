new Vue({
      el: '#app',
      data() {
	      return {
	      	show1:true,
	      	show2:false,
        	formInline: {
        		menuName:'',
	          menuContent: '1',
	          adress:'',
	        }
	      };
	    },
	    methods: {
	    	 menuContentClick(index) {
	    	 	if(index == 1){
	    	 		this.show1=true;
	    	 		this.show2=false;
	    	 	}else	if(index == 2){
	    	 		this.show1=false;
	    	 		this.show2=true;
	    	 	}
      	}
			
     }
    })