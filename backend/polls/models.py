from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Poll(models.Model):
    question = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question
    
class Choice(models.Model):
    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=100)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text
    
class Vote(models.Model):
    poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE)
    user = models.CharField(User,max_length=100)
    vote_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ('poll', 'choice', 'user')

    def __str__(self):
        return f"{self.user.username} voted for {self.choice.choice_text} in {self.poll.question}"

