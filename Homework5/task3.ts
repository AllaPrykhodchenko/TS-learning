interface Printable {
    print(): void;
  }
  
  abstract class User {
    private static idCounter = 1000;
    readonly id: number;
    email: string;
    private password: string = "";
  
    constructor(email: string, password: string) {
      this.id = User.idCounter++;
      this.email = email;
      this.setPassword(password);
    }
  
    get passwordPreview(): string {
        const middle = '•'.repeat(this.password.length - 2);
        return this.password[0] + middle + this.password[this.password.length - 1];
      }
  
    private setPassword(password: string): void {
      if (password.length < 6) {
        console.log("Password too short!");
      } else {
        this.password = password;
      }
    }
  
    changePassword(newPassword: string): void {
      this.setPassword(newPassword);
    }
  
    abstract showProfile(): void;
  }
  
  class Admin extends User implements Printable {
    isActive?: boolean;
  
    constructor(email: string, password: string, isActive?: boolean) {
      super(email, password);
      this.isActive = isActive;
    }
  
    showProfile(): void {
      if (this.isActive) {
        console.log(`https://softserve/profile/${this.id}`);
      } else {
        console.log("https://softserve/login");
      }
    }
  
    print(): void {
      console.log("Admin Class");
    }
  }
  
  const admin = new Admin('admin@gmail.com', 'Qwerty');

  admin.changePassword('Weak');
  console.log(admin.passwordPreview);
  
  admin.changePassword('Super-Pass');
  console.log(admin.passwordPreview);
  
