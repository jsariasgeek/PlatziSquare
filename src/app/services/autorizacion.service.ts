import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import swal from 'sweetalert2';
import {firebase} from '@firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Router} from '@angular/router';

interface User {
  uid:string;
  email:string;
  photoURL?:string;
  displayName?:string;
  favoriteColor?:string;
}

@Injectable()
export class AutorizacionService{

  constructor(private angularFireAuth:AngularFireAuth, private afs:AngularFirestore, router:Router){
    this.isLogged();
  }

  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((resultado)=>{
      console.log(resultado);
      swal({
        type: 'success',
        title: 'Sesión Iniciada Correctamente',
        text:'Iniciaste sesión con facebook Correctamente',
        footer:'Todo ok'
      })
    }).catch((error)=>{
      swal({
        type: 'error',
        title: 'Oops...',
        text: error,
        footer: 'No se ha podido iniciar la sesión con Facebook',
      });
    })
  }



  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (response)=>{
        console.log(response);
        swal({
          type: 'success',
          title: 'El usuario ha sido registrado con éxito',
          text:'',
          showConfirmButton: false,
          timer: 1500
        })
      }
    ).catch(
      (error)=>{
        /*swal('Un error ha ocurrido');*/
        console.log(error);
        swal({
          type: 'error',
          title: 'Oops...',
          text: error,
          footer: 'No se ha podido registrar el Usuario',
        })
      }
    )
  }


  public loguearse = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(
      (response)=>{
        console.log(response);
        swal({
          type: 'success',
          title: 'Sesión Iniciada Correctamente',
          text:'Sesión Iniciada Correctamente',
          footer:'Todo ok'
        })

      }
    ).catch(
      (error)=>{
        /*swal('Un error ha ocurrido');*/
        console.log(error);
        swal({
          type: 'error',
          title: 'Oops...',
          text: error,
          footer: 'No se ha podido iniciar la sesión',
        });
      }
    )
  }

  public desloguearse = () =>{
    this.angularFireAuth.auth.signOut().then(()=> {
     console.log('Cerraste la sesión satisfactoriamente');
    }).catch((error)=>{
      console.log(error);
    })
  }

  public isLogged(){
    return this.angularFireAuth.authState;
  }

  public getName(){
    return this.angularFireAuth.auth.currentUser.displayName;
  }

  public getImgUrl(){
    return this.angularFireAuth.auth.currentUser.photoURL;
  }

  public getEmail(){
    return this.angularFireAuth.auth.currentUser.email;
  }

  public updateUserData(user){

    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL

    }

    return userRef.set(data);
  }

  public getUser(){
    return this.angularFireAuth.auth;
  }

}
