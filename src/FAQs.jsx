import './FAQs.css';

function FAQs() {
  return (
    <div className="faqs">
        <h1 className="faqs-header">Frequently Asked Questions</h1>
        <div className="faqs-questions-container">
        <div className="faqs-questions-item-div">
            <h2>What payment methods do you accept?</h2>
            <p>We only accept credit cards (Visa, MasterCard, American Express) at this moment</p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>How do I place an order?</h2>
            <p>
                To place an order, browse our product categories, select the items you wish to purchase, 
                add them to your cart, and proceed to checkout. Follow the prompts to enter your shipping 
                and payment information.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>Can I modify or cancel my order?</h2>
            <p>
                Once your order has shipped, you will receive a confirmation email with tracking information. 
                You can also track your order through your account on our website.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>How can I track my order?</h2>
            <p>
                Once your order has shipped, you will receive a confirmation email with tracking information. 
                You can also track your order through your account on our website.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>What is your return policy?</h2>
            <p>
            We offer a 30-day return policy for unused and unopened items. To initiate a return, please contact 
            our customer service team for instructions.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>Do you offer international shipping?</h2>
            <p>
                Yes, we ship internationally! Shipping costs and delivery times may vary based on the destination.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>How do I know if an item is in stock?</h2>
            <p>
                Product availability is displayed on each product page. If an item is out of stock, you can sign 
                up for notifications to be informed when it becomes available again.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>What should I do if my item arrives damaged?</h2>
            <p>
                If your item arrives damaged, please contact our customer service team within 48 hours of delivery. 
                We will assist you in resolving the issue.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>Do you have a warranty on your products?</h2>
            <p>
                Many of our products come with a manufacturer's warranty. Please check the product description for 
                warranty details.
            </p>
        </div>
        <div className="faqs-questions-item-div">
            <h2>How can I contact customer service?</h2>
            <p>
            You can reach our customer service team via the "Contact Us" page on our website, or by emailing us at 
            support@cook-heaven.com.
            </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;