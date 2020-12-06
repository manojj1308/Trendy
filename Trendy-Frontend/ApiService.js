export async function getAllSlickImages() {
    const response = await fetch('http://localhost:5000/users/readimg', {
      method: 'get',
    });
    console.log('Response', response);
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error); 
    }
    {
      return response.json();
    }


    
}

// for gallery
export async function getAllgalleryImages() {
  const response = await fetch('http://localhost:5000/users/readgly', {
    method: 'get',
  });
  console.log('Response', response);
  if (response.status == 200) {
    return await response.json();
  } else if (response.status == 400) {
    var errorResponse = await response.json();
    throw new Error(errorResponse.error); 
  }
  {
    return response.json();
  }


}



export async function signIn(email, password) {
  try {
    const response = await fetch('v1/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log('Login-Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('Login-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function signUp(firstName, lastName, phone, userName, email, password, bio) {
  try {
    const response = await fetch('v1/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName :firstName,
        lastName : lastName,
        phone :phone,
        userName: userName,
        email: email,
        password: password,
        bio: bio
      }),
    });
    console.log('signIn-Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('signIn-Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}



export async function getAllNewsFeed() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/getallpost', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log('Response', response);
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    {
      return response;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}



export async function addPost(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('/v1/createpost', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('AddPost Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}












import axios from 'axios'
export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      phone:  newUser.phone,
      Dob: newUser.Dob,
      location:  newUser.location,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}
export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getProfile = user => {
  return axios
    .get('http://localhost:5000/users/profile', {
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const update = updateData => {
  return axios
    .put('http://localhost:5000/users/profileupdate', {
      first_name: updateData.first_name,
      last_name: updateData.last_name,
      email: updateData.email ,
      phone: updateData.phone,
      location: updateData.Location,
      Dob: updateData.Dob,
      token:updateData.token      
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const filter = product => {
  return axios
    .post('http://localhost:5000/users/productfilter', {...product})
    .then(response => {
      console.log(response)
      console.log(product)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}