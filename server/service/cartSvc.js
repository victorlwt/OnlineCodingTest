let deduplicate = (rows) => {
    //Deduplicate logic
    let keys = {};
    let r = rows.reduce((res, val) => {
	    if(!res.some(e => e['id'] === val['id'])) {
	      res.push(val);
	      keys[val['id']] = 1;
	    }
	    else{
	    	keys[val['id']] += 1;
	    }
	    return res;
	},[]);
	let result = r.map(e=>{
		e['quantity'] = keys[e['id']];
		return e;
	})
    return result;
};


module.exports = deduplicate;