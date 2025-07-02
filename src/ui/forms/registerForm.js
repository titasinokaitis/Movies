export function registerForm() {
    return `
        <div class="container">
            <div class="row">
                <form class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <div class="mb-4">
                        <label for="username" class="form-label">Username</label>
                        <input id="username" type="text" class="form-control fs-5" required>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" class="form-control fs-5" required>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input id="password" type="password" class="form-control fs-5" required>
                    </div>
                    <div class="mb-4">
                        <input class="form-check-input me-2 mt-0" style="width: 1.5rem; height: 1.5rem;" type="checkbox" value="agree" id="tos" required>
                        <label style="line-height: 1.5rem;" for="tos">Agree to our Terms of Service</label>
                    </div>
                    <div class="mb-4">
                        <button type="submit" class="btn btn-primary w-100 py-2 fs-5">Register</button>
                    </div>
                </form>
            </div>
        </div>
        `;
}