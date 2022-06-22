class logoutController {
    async logout(req, res) {
        res.clearCookie('refreshToken');
        res.status(200).json('Logged out successfully!');
    }
}
module.exports = new logoutController();
