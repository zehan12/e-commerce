import { TODO } from "../types/custom";

export const translations: TODO = {
    en: {
        helloFromBackend: "Hello from backend",
        profileImageRequired: 'Profile image required, please upload an image!',
        fieldsRequired: 'All fields are required.',
        passwordLength:
            'Password must be longer than 8 characters and contains letters, numbers, and symbols.',
        roleRestriction: 'Role must be one of the following: user or seller.',
        emailTaken: 'Email is already taken.',
        emailPasswordRequired: 'Please enter both email and password!',
        incorrectEmailOrPassword: 'Incorrect email or password.',
        passConfirm: 'Password and passwordConfirmation must be the same.',
        invalidLink: 'Invalid link or expired',
        notSamePassword:
            'This is not your password. Please enter the correct current password.',
        loginAgain: 'Please login again!',
        noTokenFound: 'No token found.',
        noUserFound: 'No user found.',
        emailVerified: 'Email is already verified.',
        noProductFound: 'No product found with this ID.',
        productExist: 'Product already exits',
        noProductsFound: 'No products found.',
        invalidRequest: 'Invalid request.',
        noCartForUser: 'No cart found for user with this email.',
        noCartFound: 'No cart found.',
        noProductInCartWithID: 'No product found with this ID in the cart.',
        noCategories: 'No categories found.',
        noCategoryFound: 'No category found with this ID.',
        categoryImageRequired: 'Image is required, please upload an image!',
        noOrders: 'No orders found',
        noOrder: 'No order found',
        noFavoriteListFound: 'No favorite list found.',
        noProductsInFavorite: 'No products on the favorite list found',
        selectImage: 'Please select an image!',
        notSeller:
            'Sorry you are not the owner of this product, you cannot perform this operation.',
        selectImages: 'Please select one or more images!',
        noReviewsFound: 'No reviews found.',
        noReviewFound: 'No review found with this ID',
        onlyOneReview: 'Sorry, you cannot write more than one review.',
        ratingLessThanOne: 'Sorry but rating cannot be less than one.',
        notReviewCreator:
            'Sorry you are not the creator of this review. You are not authorized to perform this action.',
        noUsersFound: 'No users found.',
        noDiscountCodeFound: 'No discount code found.',
        haveDiscountCode:
            'You have now a discount code, please use it before using another one.',
        noDiscountCodesFound: 'No discount codes found',
        noUserFoundWithID: 'No user found with this ID.',
        notFoundInFavoriteList: 'Product not found in favorite list.',
        colorExists: 'Color already exists.',
        sizeExists: 'Size already exists',
        noColorExists: 'Color does not exist.',
        noSizeExists: 'Size does not exist.',
        notInStatusEnum:
            'Sorry by status must be one of the following: Not Processed, Processing, Shipped, Delivered, Cancelled.',
        notColorOrSizesRoute:
            'Sorry this is not the right route to update colors and sizes.',
        passwordUpdateRoute:
            'Cannot update password from here, please go to update password route.',
        successfulSignUp: 'Account created successful, please verify your email!',
        successfulLogin: 'User logged in successfuly.',
        successfulLogout: 'Logged out successfuly.',
        successfulAddProductColor: 'Color added successfully.',
        successfulAddProductSize: 'Size added successfully.',
        successfulDeleteProductColor: 'Color deleted successfully.',
        successfulDeleteProductSize: 'Size deleted successfully.',
        successfulTokenGeneration: 'Tokens generated successfully.',
        successfulPasswordChange: 'Password changed successfully.',
        successfulEmailVerification: 'Email verified successfully.',
        successfulResetLink: 'Reset password link sent successfully.',
        successfulSendVerificationEmail: 'Verification email sent successfully.',
        successfulItemAddToCart: 'Item added to cart successfully.',
        successfulReduceByOne: 'Item reduced by one from cart successfully.',
        successfulIncreaseByOne: 'Item increased by one in cart successfully.',
        successfulCartFound: 'Cart found successfully.',
        successfulCartDelete: 'Cart deleted successfully.',
        successfulDeleteItemFromCart: 'Item deleted from cart successfully.',
        successfulCategoryCreate: 'Category created successfully.',
        successfulCategoriesFound: 'Found categories successfully.',
        successfulCategoryFound: 'Category found successfully.',
        successfulCategoryDetails: 'Category details updated successfully.',
        successfulCategoryImage: 'Category image updated successfully.',
        successfulCategoryDelete: 'Category deleted successfully.',
        successfulOrderCreate: 'Order created successfully.',
        successfulOrdersFound: 'Orders found successfully.',
        successfulOrderFound: 'Order found successfully.',
        successfulOrderCancel: 'Order cancelled successfully.',
        successfulFavoriteAdd: 'Product added to favorite list successfully.',
        successfulFavoriteGet: 'Favorite list successfully retrieved.',
        successfulProductsFound: 'Products found successfully.',
        successfulProductFound: 'Product found successfully.',
        successfulProductCreate: 'Product created successfully.',
        successfulProductDetails: 'Product detials updated successfully.',
        successfulProductMainImage: 'Product main image updated successfully.',
        successfulProductSubImages: 'Product sub images updated successfully.',
        successfulProductDelete: 'Product deleted successfully.',
        successfulReviewCreate: 'Review created successfully.',
        successfulReviewsFound: 'Reviews found successfully.',
        successfulReviewFound: 'Review found successfully.',
        successfulReviewUpdate: 'Review updated successfully.',
        successfulReviewDelete: 'Review deleted successfully.',
        successfulUsersFound: 'Users found successfully.',
        successfulUserFound: 'User found successfully.',
        successfulUserDetails: 'User details updated successfully.',
        successfulUserImage: 'User image updated successfully.',
        successfulUserDelete: 'Account deleted successfully.',
        successfulDeleteYourAccount: 'Your account deleted successfully.',
        productStatics: 'These are some statistics about products.',
        successfulDeleteProductFromFavorite:
            'Product deleted from favorite list successfully.',
        successfulProductFoundInFavorite: 'Product in favorite list.',
        successfulCodeVerification:
            'Discount code verification completed successfully.',
        successfulDiscountCodesFound: 'Discount codes found successfully.',
        successfulCodeGeneration: 'Discount code generated successfully.',
        successfulStatusUpdate: 'Order status updated successfully.',
        discountCodeDeleted: 'Discount code deleted successfully.',
        discountCodeCanceled: 'Discount code cancelled from order successfully.',
        successfulGetDiscount: 'Discount found successfully.'
    },
    fr: {
        helloFromBackend: "Bonjour depuis le backend"
    },
    es: {
        helloFromBackend: "¡Hola desde el backend"
    },
    ar: {
        helloFromBackend: "مرحبًا من الخلفية"
    },
    ja: {
        helloFromBackend: "バックエンドからこんにちは"
    }
}